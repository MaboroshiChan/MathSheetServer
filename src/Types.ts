export type Subgoal = {
    step: string,
    by: string
}

export type EquationBody = {
    equation: string,
    solution: Array<Subgoal>,
    answer: Array<number>
}
