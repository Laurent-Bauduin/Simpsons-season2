function Avatar({ img, firstName, lastName }) {
	// function Avatar({img, firstName, lastName}) =
	// function Avatar(props) avec props qui est destructuré :
	//  const {img, firstName, lastName} = props;
	return (
		<>
			<img src={img} alt="avatar" />
			<p>
				{firstName} {lastName}
			</p>
		</>
	);
}

export default Avatar;
