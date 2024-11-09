export default function Counter(props) {
    const {count} = props;
    const getCountColor = () => {
        if (count > 0) return 'positive';
        if (count < 0) return 'negative';
        return 'zero';
    };

    return (
        <section>
            <h1>Counter</h1>
            <p className={getCountColor()}>{count}</p>
        </section>
    );
}