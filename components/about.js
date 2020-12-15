import React from 'react'
import styled from 'styled-components'
// import styles from '../styles/Home.module.css'
import '../styles/style.css'

const Abtx = styled.div`
  width: 300px;
  border:2px solid #787878;
  font-size:30px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 0;
`

const About = (props) => {
    return (
        <Abtx className='com_text'>
            {props.tg}
        </Abtx>
    )
}

export default About