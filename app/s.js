const McqTestPortal = () => {
    return (
        <div className="mcq-test-portal">
            <h2 className="mcq-tp">MCQ Test Portal</h2>
            <div className="instructions-div">
                <h2>Instructions</h2>
                <p>Please read the instructions carefully before you begin:</p>
                <div>
                    <ul>
                        <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
                        <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
                        <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
                        <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
                        <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
                        <li>Review: After submission, you may review your answers and scores.</li>
                    </ul>
                </div>
                <p>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</p>
                <p>Click 'Let's Start' to begin the test. Good luck!</p>
            </div>
        </div>
    );
};

export default McqTestPortal;