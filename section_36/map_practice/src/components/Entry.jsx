export default function Entry(props) {
    const term = props.term
    return (
        <div className="term">
            <dt>
            <span className="emoji" role="img" aria-label={term.name}>
              {term.emoji}
            </span>
                <span>{term.name}</span>
            </dt>
            <dd>
                {term.meaning}
            </dd>
        </div>
    )
};

// {
//     id: 1,
//         emoji: "💪",
//     name: "Tense Biceps",
//     meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// },