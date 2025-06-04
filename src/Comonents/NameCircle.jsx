

const NameCircle = ({name}) => {
    const firstLetter = [...name]
    const color = "#"+ Math.floor(Math.random()*16777215).toString(16)
    return (
        <div>
            <div style={{backgroundColor:color}} className={`w-12 h-12 rounded-full text-xl font-bold text-black flex justify-center items-center`}><p>{firstLetter[0]}</p></div>
        </div>
    );
};

export default NameCircle;