import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const AuthContext = createContext();
export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};
	const themeValues = {
		theme,
		toggleTheme,
		isDark: theme === 'dark',
	};
	return (
		<ThemeContext.Provider value={themeValues}>
			{children}
		</ThemeContext.Provider>
	);
}
export function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}
function ThemeToggler() {
	return <div>ThemeToggler</div>;
}

export default ThemeToggler;
