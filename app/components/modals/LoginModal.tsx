'use client'

import { signIn, signOut } from 'next-auth/react';
import ModalWrapper from './ModalWrapper'
import { Button } from 'react-aria-components';

const LoginModal = () => {
    return (
        <ModalWrapper>
            <h1>Heading of Login modal</h1>
            <button
                onClick={() => signIn()}
                className="bg-light-accent px-4 py-2 rounded-md mt-4"
            >
                Login with GitHub
            </button>
            {/* <button
                onClick={handleLoginWithGoogle}
                className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4"
            >
                Login with GitHub
            </button> */}
        </ModalWrapper>
    )
}

export default LoginModal