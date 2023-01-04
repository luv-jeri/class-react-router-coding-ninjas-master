import React, { useState } from 'react';
import styles from './SignIn.module.css';

function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>
          Hello Ninjas
        </h1>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
