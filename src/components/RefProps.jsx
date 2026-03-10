import { useRef, forwardRef } from 'react';

const CustomInput = forwardRef(({ user, button }) => {
	return <input type='text' ref={ref} />;
});

function RefProps() {
    const inputRef=useRef(null)
    const secondInputRef=useRef(null)

const focusInput=()=>{
    inputRef.current?.focus()
}
const getInputValue=()=>{
    inputRef.current?.focus()
}
	return <div>RefProps</div>;
}

export default RefProps;
