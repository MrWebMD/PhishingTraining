import Super from "@/components/Layout/Super";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import classnames from "classnames";
import styles from "../styles/Quiz.module.scss";
import { useState } from "react";
import { questions } from "@/quiz-data";
import { useRouter } from "next/router";

/**
 * @typedef {Object} Question
 * @property {Answer[]} answers
 * @property {string} id
 * @property {text} text
 */
/**
 * @typedef {Object} Answer
 * @property {string} id
 * @property {string} questionId
 * @property {string} text
 */
const QuizQuestion = ({
  question,
  onAnswerChange,
  showGrade,
  correct,
  selectedAnswerId,
}) => {
  let questionClasses = classnames(styles.question, {
    [styles.question__disabled]: showGrade,
  });
  return (
    <div className={questionClasses}>
      {question.choices.map((answer) => {
        let wrapperClasses = classnames(styles.question__innerWrapper, {
          [styles.question__correct]:
            correct && showGrade && answer.id == selectedAnswerId,
          [styles.question__incorrect]:
            !correct && showGrade && answer.id == selectedAnswerId,
          [styles.question__grayed]:
            answer.id !== selectedAnswerId && showGrade,
        });

        return (
          <label
            key={answer.id}
            htmlFor={answer.id}
            className={styles.question__label}
          >
            <div className={wrapperClasses}>
              <input
                type="radio"
                className={styles.question__input}
                name={question.id}
                id={answer.id}
                onChange={onAnswerChange}
              />
              {answer.text}
            </div>
          </label>
        );
      })}
    </div>
  );
};

const SkillsTest = ({ quizQuestions }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const [swiper, setSwiper] = useState(null);

  const [error, setError] = useState(null);

  const [answers, setAnswers] = useState([]);

  const [quizResults, setQuizResults] = useState(null);

  const [gradingInProgress, setGradingInProgress] = useState(false);

  const router = useRouter();

  let quizScore = 0;
  let correctAnswers = 0;

  if (!!quizResults) {
    quizResults.forEach((res) => {
      if (res.correct) {
        correctAnswers++;
      }
    });
    quizScore = Math.floor((correctAnswers / quizQuestions.length) * 100);
  }

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.realIndex + 1);
  };

  const restartQuiz = () => {
    // setQuizResults(null);
    // setGradingInProgress(null);
    // setAnswers([]);
    // setError([]);
    // swiper.slideTo(0);

    router.reload(window.location.pathname);
  };

  const gradeQuiz = () => {
    setGradingInProgress(true);

    fetch("/api/grade", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    })
      .then((res) => res.json())
      .then((data) => {
        setGradingInProgress(false);
        setQuizResults(data);
      })
      .catch((err) => {
        setError(
          "There was an issue grading your quiz, please try again later"
        );
      });
  };

  const advanceSlide = () => {
    if (!answers[slideIndex - 1]) {
      setError("Please choose an answer before continuing.");
      return;
    }
    setError("");

    if (slideIndex >= quizQuestions.length) {
      gradeQuiz();
      return;
    }

    swiper.slideNext();
  };

  const previousSlide = () => swiper.slidePrev();

  const handleAnswerChange = (event) => {
    console.log(event.target.id, event.target.name);

    let answerId = event.target.id;

    let questionId = event.target.name;

    setAnswers((prevAnswers) => {
      let answerIndex = prevAnswers.findIndex(
        (answer) => answer.questionId == questionId
      );

      let answersCopy = [...prevAnswers];

      if (answerIndex < 0) {
        answersCopy.push({
          questionId,
          answerId,
        });
        return answersCopy;
      }

      answersCopy[answerIndex].answerId = answerId;

      return answersCopy;
    });
  };

  return (
    <>
      <Head>
        <title>PhishED | Skills Test</title>
      </Head>
      <main className={classnames(styles.quiz, "pageBoundary")}>
        <button
          className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover"
          onClick={previousSlide}
          disabled={gradingInProgress}
        >
          Previous question
        </button>
        <button
          className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover"
          onClick={advanceSlide}
          disabled={
            gradingInProgress ||
            (quizResults && slideIndex == quizQuestions.length)
          }
        >
          {slideIndex !== quizQuestions.length ? "Next Question" : "Submit"}
        </button>
        <h1>
          Phishing Skills Test ({slideIndex} / {quizQuestions.length})
        </h1>
        {quizResults && (
          <>
            <h3>
              You scored a {quizScore}% ({correctAnswers}/{quizQuestions.length}
              ). Use the Next and previous buttons to review, or retake this
              quiz.
            </h3>
            <button
              className="btn btn--outline btn--fullWidthOnMobile filter-brightness-hover"
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </>
        )}
        {error && <p>{error}</p>}
        {gradingInProgress && <p>Grading in progress...</p>}
        <Swiper
          pagination={{
            type: "fraction",
          }}
          onSwiper={setSwiper}
          onRealIndexChange={handleSlideChange}
          navigation={false}
          modules={[Pagination, Navigation]}
          className={styles.quiz__slideContainer}
        >
          {quizQuestions.map((question, index) => {
            let showGrade = !!quizResults;

            let correct = false;

            let selectedAnswerId = null;

            if (showGrade) {
              let result = quizResults.find(
                (result) => result.questionId == question.id
              );

              correct = result.correct;

              selectedAnswerId = result.answerId;
            }

            return (
              <SwiperSlide key={question.id}>
                <h2>{question.text}</h2>
                <QuizQuestion
                  key={question.id}
                  question={question}
                  onAnswerChange={handleAnswerChange}
                  showGrade={showGrade}
                  correct={correct}
                  selectedAnswerId={selectedAnswerId}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </>
  );
};
export async function getServerSideProps(context) {
  let strippedQuizQuestions = questions.map((question) => {
    const { id, type, text, choices } = question;

    return {
      id,
      type,
      text,
      choices,
    };
  });
  return {
    props: { quizQuestions: strippedQuizQuestions }, // will be passed to the page component as props
  };
}

export default SkillsTest;
