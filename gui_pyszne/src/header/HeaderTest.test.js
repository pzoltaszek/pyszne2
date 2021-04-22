import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header component test', () => {
    let propsInput = "test";
    render(
        <Header text={propsInput} />
    );

    expect(screen.getByText(propsInput)).toBeInTheDocument();
    expect(screen.queryByText("unknown")).toBeNull();
});