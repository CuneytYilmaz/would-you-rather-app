import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
	render() {
      const { question, author, selectedOption } = this.props;
      
	  const optionOneCount = question.optionOne.votes.length;
      const optionTwoCount = question.optionOne.votes.length;
      const totalCount = optionOneCount + optionOneCount;
      const optionOnePercentage = ( optionOneCount / totalCount ) * 100;
      const optionTwoPercentage = ( optionTwoCount / totalCount ) * 100;
      
    	return(
        	<div className='home-container center'>
          		<div className='bg-header question-poll-header'>
          			Asked by {author.name}
          		</div>
				<hr className='hr-home-color' />
				<div className='in-block-left'>
					<img
						alt={author.id}
						src={author.avatarURL}
						className='question-author-img center'
					/>
				</div>
				<div className='in-block-right'>
					<h2 className='question-header mb-15'>Results:</h2>
					<div className={selectedOption === 'optionOne' 
                                        	? 'result-block bg-header result-selected-block' 
                                        	: 'result-block bg-header' } >
						<span className='fs-15'>Would you rather {question.optionOne.text}?</span>
						<br />
						{optionOnePercentage}
						<br />
						<div className='result-total-votes fs-15'>{optionOneCount} out of {totalCount} votes</div>
					</div>
					<div className={selectedOption === 'optionTwo' 
                                        	? 'result-block bg-header result-selected-block' 
                                        	: 'result-block bg-header' } >
						<span className='fs-15'>Would you rather {question.optionTwo.text}?</span>
						<br />
						{optionTwoPercentage}
						<br />
						<div className='result-total-votes fs-15'>{optionTwoCount} out of {totalCount} votes</div>
					</div>
				</div>
          	</div>
        )
    }
}

function mapStateToProps ({ questions, users, authedUser}, { id }) {
	return {
    	question: questions[id],
      	author: users[questions[id].author],
      	selectedOption: users[questions[id].author].answers[id]
    }
}

export default connect(mapStateToProps)(Result);