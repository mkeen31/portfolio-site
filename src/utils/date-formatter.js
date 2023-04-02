const dateFormatter = (dateString) => {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    if (dateString === null)
    {
        return "Present";
    }
    const date = new Date(dateString);

    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

}

export default dateFormatter;