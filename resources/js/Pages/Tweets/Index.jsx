import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Tweet from '@/Components/Tweet';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
 
export default function Index({ auth, tweets }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('tweets.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tweets" />
 
            <div className="max-w-2xl p-4 mx-auto sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Tweet</PrimaryButton>
                </form>

                <div className="mt-6 bg-white divide-y rounded-lg shadow-sm">
                    {tweets.map(tweet =>
                        <Tweet key={tweet.id} tweet={tweet} />
                    )}
                </div>          
            </div>
        </AuthenticatedLayout>
    );
}