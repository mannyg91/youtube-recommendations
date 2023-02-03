import React from 'react'
import appTopics  from './data/topics'
import {useState} from 'react';

const TopicDropdown = (props) => {

  
    const handleChange = event => {
      props.setSelectedTopic(event.target.value);
    };

    const sortedTopics = () => {

    }
    return (
      <div className='topic-dropdown'>
        Topic:
        <select value={props.selectedTopic} onChange={handleChange}>
          {appTopics.sort((a,b) =>a.name > b.name ? 1: -1)
            .map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
      </select>
      </div>
    );
  }

export default TopicDropdown





