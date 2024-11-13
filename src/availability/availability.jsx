import React from 'react';

function Availability() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Основний контент сторінки */}
            <div className="flex-grow p-4 sm:p-6 max-w-md w-full mx-auto bg-white rounded-lg shadow-lg mt-6">
                <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-700">Поди:</div>
                    <span className="text-red-600 font-bold">Немає в наявності</span>
                </div>

                <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-700">Жижі:</div>
                    <div className="text-gray-800 space-y-3 mt-2">
                        <p>
                            <span className="font-semibold">Набір для самозамісу Chaser Mix 30ml 50mg</span><br />
                            <span className="text-gray-600">Смаки:</span> Манго та диня🥭🍈, Лимонний пиріг🍋
                        </p>
                        <hr className="border-gray-300" />
                        <p>
                            <span className="font-semibold">Набір для самозамісу Chaser For Pods 30 ml 50 mg</span><br />
                            <span className="text-gray-600">Смаки:</span> Банан🍌
                        </p>
                        <hr className="border-gray-300" />
                        <p>
                            <span className="font-semibold">Набір для самозамісу Flavorlab FL350 30ml 50 mg</span><br />
                            <span className="text-gray-600">Смаки:</span> Ягідний лимонад🍹, Мята 🌿, Гранат з ментолом💣🌿, Полуниця та манго🍓🥭, Чорниця та малина🫐🍓, Малина та кавун🍓🍉, Виноград з апельсином та корицею🍇🍊, Виноград та лимон🍇🍋, Вишня з ментолом🍒🌿, Виноград🍇, Чорниця + малина + лимон🫐🍓🍋, Чорниця🫐
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-700">Картриджі:</div>
                    <span className="text-red-600 font-bold">Немає в наявності</span>
                </div>
            </div>
        </div>
    );
}

export default Availability;
