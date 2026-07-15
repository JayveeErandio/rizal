/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActivePage {
  HOME = "home",
  CENTURY_CONTEXT = "century_context",
  FAMILY = "family",
  CHILDHOOD = "childhood",
  EDUCATION = "education",
  TRIPS = "trips",
  OTHER_SIDE = "other_side",
  WOMEN = "women",
  WRITINGS_LEGACY = "writings_legacy",
  QUIZ = "quiz"
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
}

export interface FamilyMember {
  name: string;
  relation: string;
  lifeDates: string;
  description: string;
}

export interface Masterpiece {
  title: string;
  category: "Music" | "Science" | "Art" | "Education";
  year: string;
  description: string;
  mediaPlaceholder: string;
}

export interface WomenInLife {
  name: string;
  nationality: string;
  period: string;
  description: string;
  legacy: string;
}

export interface WritingItem {
  title: string;
  type: "Novel" | "Poem" | "Essay";
  yearPublished: string;
  location: string;
  synopsis: string;
  significance: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: string;
}
