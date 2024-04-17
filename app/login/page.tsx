"use client"

// LoginPage.tsx
import React, { useState } from 'react';
import styles from './page.module.css';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className={`${styles.loginContainer} ${styles.backgroundGif}`}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
                <div className={styles.formFooter}>
                    <p>계정이 없으신가요? <a href="/signup">회원가입</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
