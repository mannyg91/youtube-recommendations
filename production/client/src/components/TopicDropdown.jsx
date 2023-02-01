import React from 'react'
import appTopics  from './data/topics'

const TopicDropdown = (props) => {

  
    const handleChange = event => {
      props.setSelectedTopic(event.target.value);
    };
  
    return (
      <div className='topic-dropdown'>
        Topic:
        <select value={props.selectedTopic} onChange={handleChange}>
          {appTopics.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
      </select>
      </div>
    );
  }

export default TopicDropdown





