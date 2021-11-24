type Subgoal = {
    step: string,
    by: string
}

type EquationBody = {
    equation: string,
    solution: Array<Subgoal>,
    answer: Array<number>
}
