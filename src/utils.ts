/**
 * Helper function for the next one.
 * @param {*} equationData 
 */
function equationToLean(equationData){
    
}

/**
 * Convert equation object into LEAN code.
 * @param {Object} equationReqBody the js object contains the info about solution step. 
 */
function handleEquationRequest(equationReqBody): string{
    const equation = equationReqBody.equation;
    const solution = equationReqBody.solution;
    const result = equationReqBody.result;
    const lean_solution = solution.map((subgoal, index)=>{
        const by = subgoal.by;
        const step = subgoal.step;
        const reason = subgoal.by == "trivial" 
            ? "linarith" : (subgoal. by == "square")
            ? `exact pow_eq_zero h${index}`
            : `from zero_eq_mul.mp (eq.symm h${index})`;
        return `have h${index + 1}, ${reason}`;
    }).join(",");
    
    const result_lean = `${result}`
    return ;
}