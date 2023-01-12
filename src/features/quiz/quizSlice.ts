import { createSlice } from "@reduxjs/toolkit"

export interface InitialState{
    activeQuestion: number,
    content: string,
}

const initialState: InitialState | {} = {
    activeQuestion: 0,
    questions: [
        { content: 'Co to jest React', color: 'limegreen'},
        { content: 'Co to jest Redux', color: 'purple'},
        { content: 'Co to jest Flux', color: 'orange'},
        { content: 'Co to jest HTML', color: 'lightblue'},
    ]
}

export const slice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        increment: (state: any) => {
            state.activeQuestion += 1
        },
        decrement: (state: any) => {
            state.activeQuestion -= 1
        },
        reset: (state: any) => {
            state.activeQuestion = 0
        }
    }
})

export const selectQuestions = (state: any) => state.quiz.questions

export const countQuestion = (state: any) => state.quiz.activeQuestion

export const selectActiveQuestion = (state: any) => state.quiz.questions[state.quiz.activeQuestion]

export const { increment, decrement, reset } = slice.actions

export const questionsLength = (state: any) => state.quiz.questions

export default slice.reducer;

