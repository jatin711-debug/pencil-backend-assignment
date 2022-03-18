import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
  topicNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  hierarchy: [String],
});

const questionSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  annotations: [String],
});

export const QuestionModel = mongoose.model('Questions', questionSchema);

export const TopicModel = mongoose.model('Topics', topicSchema);
