import PageTemplate from "@assets/page/PageTemplate";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { ArrowLeftIcon, KeyIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import TextInput from "@assets/components/TextInput";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginCorrect, setLogin] = useState(true)

    const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // const res = await context.login(email, password);

        // console.log(res)
        // if (res == true){
        //     goHome('/learn')
        // }
        // else{
        setLogin(false)
        // }
    }

    return (
        <PageTemplate>
            <Link to="/" className="self-start inline-flex items-center gap-2">
                <ArrowLeftIcon className="w-6" />
                Back
            </Link>

            <form onSubmit={OnSubmit}>
                <Card title="Login" className="bg-transparent lg:w-1/2 xl:w-1/3 mx-auto text-center rounded-xl px-4">

                    <TextInput
                        logo={<EnvelopeIcon className="w-7" />}
                        id="email"
                        label="Email"
                        value={email}
                        setValue={setEmail}
                    />

                    <TextInput
                        logo={<KeyIcon className="w-7" />}
                        id="password"
                        label="Password"
                        value={password}
                        setValue={setPassword}
                        fieldsetClass="mb-3"
                    />

                    {loginCorrect === false && (
                        <p className="text-red-600 font-light text-sm text-center">
                            Incorrect user or password
                        </p>
                    )}

                    <div className="flex justify-center">
                        <Button label="Login" className="border-2 border-violet-800 text-violet-800 hover:bg-violet-800 focus:bg-violet-800 hover:text-white focus:text-white my-3 py-1 px-4" />
                    </div>

                    <p>
                        Don't have an account yet?
                        <Link to="/signup" className="text-violet-800 ms-1 border-b-2 border-violet-800/80">
                            Sign up here!
                        </Link>
                    </p>
                </Card>
            </form>
        </PageTemplate>
    );
}

export default Login;