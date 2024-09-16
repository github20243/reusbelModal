# ReusableModal Component

## Описание
Компонент `ReusableModal` — это переиспользуемый модальный компонент, который адаптируется под настольные и мобильные устройства, используя библиотеку Material UI и стилизацию с помощью `styled`.

## Пропсы

- **`open`** — Булевое значение, определяющее, открыт ли модал.
- **`onClose`** — Функция, вызываемая для закрытия модального окна.
- **`children`** — Содержимое модального окна, передаваемое через этот проп.

## Использование

```jsx
import React, { useState } from "react";
import { Button } from "@mui/material";
import ReusableModal from "./ReusableModal";

const App = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button variant="contained" onClick={handleOpen}>
				Открыть Модалку
			</Button>
			<ReusableModal open={open} onClose={handleClose}>
				<h2 id="modal-title">Заголовок Модалки</h2>
				<p id="modal-description">Это описание модального окна.</p>
			</ReusableModal>
		</>
	);
};

export default App;
