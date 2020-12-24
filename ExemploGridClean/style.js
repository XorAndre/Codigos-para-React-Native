import style from 'styled-components/native'

const Container = style.View`
    margin: 0 auto;
    width: 98%;
`;
const Row = style.View`
    display: flex;
    flex-direction:  ${props => props.Exibi.ValueExibi};;
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Col = style.View`
	padding: 10px;
    ${({ Value }) => Value && getColumn(Value)}
`;
export{
    Container,
    Col,
    Row
}