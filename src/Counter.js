import React from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const data=useSelector(s=>s.counterReducer.c)
    const islogged=useSelector(s=>s.authReducer.isLog)
    const dispatch=useDispatch()
    const styles = {
        container: {
            display: 'flex',
            
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Center vertically
            textAlign: 'center', // Center text horizontally
            fontSize: '4rem', // Make font bigger
        },
        button: {
           
            margin: '0.5rem', // Add some margin between buttons
        },
    };
  return (
    <div style={styles.container}>
    <Row>
            <h6 style={{ fontSize: '4rem' }}>Counter: {data}</h6>
            <h1>{islogged ? 'logged' : 'not logged'}</h1>
            <button style={styles.button} onClick={() => dispatch({ type: 'inc' })}>+</button>
            <button style={styles.button} onClick={() => dispatch({ type: 'dec' })}>-</button>
            <button style={styles.button} onClick={() => dispatch({ type: 'res' })}>Rst</button>

            <button style={styles.button} onClick={() => dispatch({ type: 'toggle' })}>toggle the log</button>
            
            </Row>
        </div>
  )
}

export default Counter
