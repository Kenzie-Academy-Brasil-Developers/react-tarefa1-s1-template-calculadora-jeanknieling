import { ButtonContainer }from './style';

const Button = ({ children, ...rest }) => {
    return (
        <ButtonContainer {...rest}>{children}</ButtonContainer>
    );
}

export default Button;