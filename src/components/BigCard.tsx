import react from "React";
import profile from "../accessories/images/profile.jpg";

const BigCard = () => {
	return (
		<>
			<div className='flex justify-center'>
				<div className='bg-white w-[450px] h-[600px] rounded flex flex-col'>
					<div className='flex justify-center'>
						{/* <div className='w-[300px] h-[200px]'> */}
							<img
								src={profile}
								alt='profile pics'
								className=' object-cover'
							/>
						{/* </div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default BigCard;
