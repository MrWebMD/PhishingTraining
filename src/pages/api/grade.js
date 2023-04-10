// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { questions } from "@/quiz-data";
const validate = require("jsonschema").validate;

const answerSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "array",
  additionalItems: true,
  minItems: questions.length,
  maxItems: questions.length,
  items: [
    {
      type: "object",
      properties: {
        questionId: {
          type: "string",
        },
        answerId: {
          type: "string",
        },
      },
      required: ["questionId", "answerId"],
    },
    {
      type: "object",
      properties: {
        questionId: {
          type: "string",
        },
        answerId: {
          type: "string",
        },
      },
      required: ["questionId", "answerId"],
    },
    {
      type: "object",
      properties: {
        questionId: {
          type: "string",
        },
        answerId: {
          type: "string",
        },
      },
      required: ["questionId", "answerId"],
    },
  ],
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  let validationResult = validate(req.body, answerSchema);

  if (validationResult.errors.length > 0) {
    let msg =
      validationResult.errors[0].property +
      " " +
      validationResult.errors[0].message;
    res.status(400).json({ message: msg });
    return;
  }

  let gradedAnswers = [];

  for (let choice of req.body) {
    console.log("Processed choice", choice);
    let correct = false;

    let question = questions.find((q) => q.id == choice.questionId);

    if (!question) {
      console.log(question);
      return res
        .status(400)
        .json({ message: "The questions you answered could not be found" });
    }

    console.log(question.choices[question.answer].id, "==", choice.answerId);

    if (question.choices[question.answer].id == choice.answerId) {
      correct = true;
    }

    gradedAnswers.push({
      answerId: choice.answerId,
      questionId: choice.questionId,
      correct,
    });
  }

  console.log(gradedAnswers);
  res.status(200).json(gradedAnswers);
}
