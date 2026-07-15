/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { quizQuestions } from "../../data";
import { QuizQuestion } from "../../types";
import Crest from "../Crest";

export default function QuizView() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  
  // Student name for the certificate
  const [studentName, setStudentName] = useState<string>("");
  const [certificateIssued, setCertificateIssued] = useState<boolean>(false);

  // Initialize and randomize 5 questions from the pool
  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
    setCurrentIdx(0);
    setSelectedOptionIdx(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setCertificateIssued(false);
  };

  const handleOptionSelect = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedOptionIdx(optionIdx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIdx === null || isSubmitted) return;
    
    const currentQuestion = questions[currentIdx];
    if (selectedOptionIdx === currentQuestion.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIdx < 4) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionIdx(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const getEvaluation = (finalScore: number) => {
    if (finalScore === 5) {
      return {
        title: "Ilustrado Mastermind (Sobra-saliente)",
        description: "Exquisite! Your intellect matches the highest scholars of Ateneo. You are fit to write the sequel to El Filibusterismo!",
        color: "text-emerald-800 border-emerald-500/30 bg-emerald-50/50"
      };
    } else if (finalScore === 4) {
      return {
        title: "Ateneon Scholar",
        description: "Brilliant! You have a highly profound understanding of Rizal's historical logs and life achievements.",
        color: "text-blue-800 border-blue-500/30 bg-blue-50/50"
      };
    } else if (finalScore === 3) {
      return {
        title: "La Liga Filipina Member",
        description: "A solid patriotic effort. You are well on your way to becoming a true reformist. Keep studying the logs of our heroes.",
        color: "text-amber-800 border-amber-500/30 bg-amber-50/50"
      };
    } else {
      return {
        title: "Young Moth Cadet",
        description: "You flew too close to the attractive flame! Do Doña Teodora proud and study the archives again to protect your wings.",
        color: "text-crimson-800 border-crimson-500/30 bg-crimson-50/50"
      };
    }
  };

  const activeQuestion = questions[currentIdx];

  return (
    <div className="space-y-12 animate-fade-in" id="quiz-view-container">
      <div className="text-center space-y-2">
        <span className="font-display text-gold-600 text-xs font-bold tracking-[0.2em] block uppercase">
          CHAMBER VIII • THE ACADEMIC EXAMINATION
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-crimson-950">
          The Scholar’s Quiz Game
        </h1>
        <p className="font-serif italic text-xs md:text-sm text-gold-800/80 max-w-2xl mx-auto">
          "Test your knowledge of the polymath of Calamba. A random selection of archival questions to prove your Ilustrado credentials."
        </p>
        <div className="w-20 h-0.5 bg-crimson-700 mx-auto mt-3" />
      </div>

      {questions.length > 0 && !quizFinished && (
        <div className="max-w-3xl mx-auto" id="quiz-playing-stage">
          <div className="parchment-card p-6 md:p-10 rounded-sm border-2 border-double border-gold-500 relative overflow-hidden" id="quiz-box-card">
            <div className="absolute inset-2 border border-dashed border-gold-600/10 rounded-xs pointer-events-none" />

            {/* Stage Progress & Tracker */}
            <div className="flex justify-between items-center border-b border-gold-300/30 pb-3 mb-6" id="quiz-tracker">
              <span className="font-mono text-[9px] text-crimson-800 bg-crimson-50 px-2.5 py-0.5 border border-crimson-200 rounded-sm uppercase">
                Question {currentIdx + 1} of 5
              </span>
              <div className="flex items-center gap-1.5 text-xs font-serif italic text-gold-800">
                {/* Pocket watch icon */}
                <svg className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 5v7l4 2" /></svg>
                Current Category: <strong className="text-crimson-950 ml-0.5">{activeQuestion.category}</strong>
              </div>
            </div>

            {/* Question prompt */}
            <h3 className="font-serif text-lg md:text-xl font-bold text-crimson-950 leading-snug mb-6" id="quiz-question-prompt">
              {activeQuestion.question}
            </h3>

            {/* Option Buttons */}
            <div className="grid grid-cols-1 gap-3.5" id="quiz-options">
              {activeQuestion.options.map((option, index) => {
                let optionStyle = "bg-faf6ee text-amber-950 border-gold-300/40 hover:bg-gold-100/30";
                
                if (selectedOptionIdx === index) {
                  optionStyle = "bg-gold-100 border-gold-500 ring-1 ring-gold-500 font-semibold";
                }

                if (isSubmitted) {
                  if (index === activeQuestion.correctAnswerIndex) {
                    optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500";
                  } else if (selectedOptionIdx === index) {
                    optionStyle = "bg-red-50 border-red-400 text-red-950 font-semibold";
                  } else {
                    optionStyle = "bg-faf6ee text-amber-950/40 border-gold-300/20";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`p-4 rounded-xs border text-left cursor-pointer transition-all duration-200 text-sm flex items-center gap-3 ${optionStyle}`}
                    disabled={isSubmitted}
                    id={`option-btn-${index}`}
                  >
                    <span className="font-mono text-[10px] font-bold text-crimson-800/60 bg-gold-50 w-6 h-6 rounded-full border border-gold-300/35 flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-serif font-medium">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback & Actions */}
            <div className="mt-8 pt-6 border-t border-gold-300/25 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" id="quiz-actions">
              <div className="flex-grow">
                {isSubmitted && (
                  <div className="p-4 bg-gold-50 border border-dashed border-gold-600/20 rounded-xs space-y-1.5 text-xs text-justify animate-fade-in" id="explanation-box">
                    <span className="font-display text-[8px] font-bold text-crimson-900 block uppercase tracking-wider">
                      HISTORICAL LOG & EXPLANATION
                    </span>
                    <p className="font-serif leading-relaxed text-amber-950">
                      {activeQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex-shrink-0 flex justify-end">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOptionIdx === null}
                    className={`px-6 py-2.5 rounded-sm font-display font-bold text-xs tracking-widest border transition-all duration-200 ${selectedOptionIdx !== null ? "bg-crimson-800 text-gold-100 border-crimson-950 cursor-pointer hover:bg-crimson-900" : "bg-gold-50/40 text-amber-900/40 border-gold-300/20 cursor-not-allowed"}`}
                    id="submit-answer-btn"
                  >
                    SUBMIT ANSWER
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-crimson-950 text-gold-100 hover:bg-crimson-900 rounded-sm font-display font-bold text-xs tracking-widest border border-crimson-950 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                    id="next-question-btn"
                  >
                    {currentIdx < 4 ? "NEXT QUESTION" : "COMPUTE MARKS"}
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results & Gilded Certificate screen */}
      {quizFinished && (
        <div className="max-w-3xl mx-auto space-y-8" id="quiz-results-stage">
          {/* Summary Evaluation Card */}
          <div className="parchment-card p-6 md:p-8 rounded-sm border border-gold-400 space-y-4 text-center" id="results-evaluation">
            <span className="font-display text-[9px] text-amber-900/50 tracking-widest uppercase font-bold block">
              ACADEMIC VALUATION MARKS
            </span>
            <div className="flex justify-center items-baseline gap-1" id="results-score-row">
              <span className="font-serif text-5xl font-extrabold text-crimson-950">{score}</span>
              <span className="font-serif text-2xl text-amber-900/50">/ 5</span>
            </div>

            <div className={`p-4 border rounded-sm ${getEvaluation(score).color} max-w-xl mx-auto space-y-1.5`} id="results-grade-box">
              <h4 className="font-serif font-bold text-base">
                {getEvaluation(score).title}
              </h4>
              <p className="text-xs leading-relaxed text-amber-950/90 font-medium">
                {getEvaluation(score).description}
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={startNewQuiz}
                className="px-6 py-2.5 bg-transparent hover:bg-gold-100/50 text-crimson-950 rounded-sm font-display font-bold text-xs tracking-widest border border-crimson-950/30 transition-all duration-200 cursor-pointer"
                id="retry-quiz-btn"
              >
                RE-ATTEMPT EXAM
              </button>
            </div>
          </div>

          {/* Certificate Generator */}
          <div className="bg-faf6ee border border-gold-400/50 p-6 md:p-8 rounded-sm space-y-6" id="certificate-generator-panel">
            <div className="text-center space-y-1">
              <h3 className="font-serif text-lg font-bold text-crimson-950">Generate Your Certificate</h3>
              <p className="text-xs text-amber-900/60 font-serif italic">
                Input your name below to stamp your credential into the Scholastica Archives.
              </p>
            </div>

            {!certificateIssued ? (
              <div className="max-w-md mx-auto flex gap-3" id="certificate-input-form">
                <input
                  type="text"
                  placeholder="Enter Student Name (e.g., Juan dela Cruz)"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="flex-grow p-2.5 text-xs rounded-sm border border-gold-300 bg-white text-amber-950 focus:outline-none focus:border-crimson-800 focus:ring-1 focus:ring-crimson-800 font-serif"
                />
                <button
                  onClick={() => studentName.trim() && setCertificateIssued(true)}
                  disabled={!studentName.trim()}
                  className={`px-5 py-2 rounded-sm font-display font-bold text-xs tracking-wider transition-all duration-200 border ${studentName.trim() ? "bg-crimson-850 text-gold-100 border-crimson-950 cursor-pointer hover:bg-crimson-950" : "bg-gold-50/40 text-amber-900/40 border-gold-300/20 cursor-not-allowed"}`}
                  id="issue-cert-btn"
                >
                  ISSUE CERTIFICATE
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-scale-up" id="certificate-exhibition">
                {/* Gilded Certificate Layout */}
                <div className="p-8 md:p-12 border-8 border-double border-gold-500 bg-white text-amber-950 relative overflow-hidden flex flex-col items-center shadow-2xl text-center" id="printable-certificate">
                  {/* Fine double interior outline */}
                  <div className="absolute inset-2 border border-dashed border-gold-600/35 pointer-events-none" />
                  <div className="absolute inset-4 border border-gold-300/20 pointer-events-none" />

                  {/* Watermark Crest Background */}
                  <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none">
                    <Crest size={350} />
                  </div>

                  <Crest size={90} className="mb-4" />

                  <span className="font-display text-[9px] tracking-[0.25em] text-gold-700 font-bold uppercase mb-1">
                    SCHOLASTICA RIZALIANA DIGITIZED CHANCELLERY
                  </span>

                  <h2 className="font-serif text-3xl font-extrabold text-crimson-950 tracking-tight leading-none mb-6">
                    Certificate of Rizalian Biography
                  </h2>

                  <p className="font-serif italic text-xs text-amber-900/70 mb-2">
                    This official credential is hereby bestowed upon
                  </p>

                  <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-crimson-850 border-b-2 border-double border-gold-500 px-6 pb-2 inline-block mb-4 tracking-wide font-medium">
                    {studentName}
                  </h3>

                  <p className="font-serif text-xs leading-relaxed max-w-lg text-amber-950/80 mb-6">
                    for demonstrating high academic competence and historical memory by completing the competitive examination on the life, polymathic masterpieces, family genealogy, and revolutionary writings of
                    <strong className="text-crimson-950 block mt-1 uppercase tracking-wider font-display text-[10.5px]">
                      DR. JOSÉ PROTASIO RIZAL (1861 – 1896)
                    </strong>
                  </p>

                  <div className="grid grid-cols-2 gap-8 w-full max-w-md pt-4 border-t border-gold-600/20" id="cert-signatories">
                    <div className="space-y-1">
                      <p className="font-serif font-bold text-[10px] text-crimson-950 uppercase tracking-widest">{score} / 5</p>
                      <div className="w-16 h-px bg-gold-400 mx-auto" />
                      <p className="font-serif italic text-[8px] text-gold-700">Official Exam Score</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[9px] text-crimson-950">{new Date().toISOString().split('T')[0]}</p>
                      <div className="w-16 h-px bg-gold-400 mx-auto" />
                      <p className="font-serif italic text-[8px] text-gold-700">Date of Matriculation</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2.5 bg-crimson-900 hover:bg-crimson-950 text-gold-100 rounded-sm font-display font-bold text-xs tracking-wider border border-crimson-950 transition-all duration-200 cursor-pointer flex items-center gap-2"
                    id="print-cert-btn"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.615 0-1.12-.511-1.12-1.227L6.34 18m11.318-18h-11.32" /></svg>
                    PRINT CREDENTIAL
                  </button>
                  <button
                    onClick={() => setCertificateIssued(false)}
                    className="px-5 py-2.5 bg-transparent hover:bg-gold-100/50 text-crimson-950 rounded-sm font-display font-bold text-xs tracking-wider border border-crimson-950/30 transition-all duration-200 cursor-pointer"
                    id="edit-cert-name-btn"
                  >
                    RE-ENTER NAME
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
