'use strict';

(function attachExamCore(globalObj) {
  function normalizeText(value) {
    return String(value ?? '').trim().toLowerCase();
  }

  function toArray(value) {
    if (Array.isArray(value)) return value;
    if (value == null) return [];
    return [value];
  }

  function compareArraysInsensitiveSorted(a, b) {
    const left = toArray(a).map(normalizeText).sort();
    const right = toArray(b).map(normalizeText).sort();

    if (left.length !== right.length) return false;
    for (let i = 0; i < left.length; i += 1) {
      if (left[i] !== right[i]) return false;
    }
    return true;
  }

  function getCorrectField(question) {
    return question && (question.c !== undefined ? question.c : question.correct);
  }

  function inferType(question) {
    const type = normalizeText(question.type);

    if (['single', 'single-choice', 'radio'].includes(type)) return 'single';
    if (['multiple', 'multi', 'multiple-choice', 'checkbox'].includes(type)) return 'multiple';
    if (['fill', 'fill-in', 'text', 'input'].includes(type)) return 'fill';
    if (['lab', 'short-answer', 'api'].includes(type)) return 'lab';
    if (['dragdrop', 'drag', 'drag-and-drop', 'order', 'ordering'].includes(type)) return 'dragdrop';

    const correct = getCorrectField(question);
    if (Array.isArray(correct) && Array.isArray(question.options)) return 'multiple';
    if (Array.isArray(question.options)) return 'single';
    return 'fill';
  }

  function isCorrect(question, answer) {
    const correct = getCorrectField(question);
    const type = question._type;

    if (type === 'single') {
      return normalizeText(answer) === normalizeText(correct);
    }

    if (type === 'multiple') {
      return compareArraysInsensitiveSorted(answer, correct);
    }

    if (type === 'fill' || type === 'lab') {
      if (Array.isArray(correct)) {
        return correct.map(normalizeText).includes(normalizeText(answer));
      }
      return normalizeText(answer) === normalizeText(correct);
    }

    if (type === 'dragdrop') {
      const expected = toArray(correct).map(v => String(v));
      const actual = toArray(answer).map(v => String(v)).filter(v => normalizeText(v).length > 0);
      if (expected.length !== actual.length) return false;
      for (let i = 0; i < expected.length; i += 1) {
        if (normalizeText(expected[i]) !== normalizeText(actual[i])) return false;
      }
      return true;
    }

    return false;
  }

  function scoreExam({ questions, answers, questionCount, scoreMin, scoreMax, passScore }) {
    let correctCount = 0;
    const details = questions.map((question, index) => {
      const ok = isCorrect(question, answers[index]);
      if (ok) correctCount += 1;
      return { index, ok };
    });

    const raw = correctCount / questionCount;
    const scaled = Math.round(scoreMin + raw * (scoreMax - scoreMin));

    return {
      correctCount,
      raw,
      scaled,
      passed: scaled >= passScore,
      details
    };
  }

  globalObj.ExamCore = {
    normalizeText,
    toArray,
    compareArraysInsensitiveSorted,
    getCorrectField,
    inferType,
    isCorrect,
    scoreExam
  };
})(window);
