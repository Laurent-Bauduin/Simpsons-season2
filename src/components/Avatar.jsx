import {useState} from "react";

function Avatar({ img, firstName, lastName }) {
	// function Avatar({img, firstName, lastName}) =
	// function Avatar(props) avec props qui est destructuré :
	//  const {img, firstName, lastName} = props;
	const [donutsCount, setDonutsCount] = useState(0);

	return (
		<>
			<img src={img} alt={firstName} />
			{/*
				<img src="https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png" 
				alt="Simpson Bart" />

				*/}
			<p>
				{firstName} {lastName}
			</p>
			<button onClick={() => setDonutsCount(donutsCount + 1)}>🍩 {donutsCount}</button>
			<br />
		</>
	);
}


export default Avatar;
