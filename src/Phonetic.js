

export default function Phonetic (props){
    console.log(props);
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                Listen to the phonetics
            </a>
            <br />
            {props.phonetic.text}
        </div>
    );
}