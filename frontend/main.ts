declare global {
    interface Window {
        Telegram: any;
    }
}

import TonConnect from '@tonconnect/sdk';

const connector = new TonConnect();



document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Исключаем элементы с классами 'exclude-class-1' и 'exclude-class-2'
    if (!target.classList.contains('card-container')) {
        // Ваш код обработки события для всех остальных элементов
        console.log('Клик на весь экран, кроме элементов с классами "exclude-class-1" и "exclude-class-2"');
    }
});