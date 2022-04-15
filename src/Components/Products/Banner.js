import React from 'react'

function Banner() {
    return (
        <div>
            <h1>Alle produkter</h1>
            <ul id="filter-list">
                <button id="filter-button" onclick="showFilters()" class="filter">Filter</button>

                <button onclick="fillProductsListButton(event, 0), hideFilters()"
                    class="filter filter-option active">Alle systemer</button>
                <button onclick="fillProductsListButton(event, 2), hideFilters()" class="filter filter-option">Små
                systemer</button>
                <button onclick="fillProductsListButton(event, 3), hideFilters()"
                    class="filter filter-option">Mellomstore systemer</button>
                <button onclick="fillProductsListButton(event, 4), hideFilters()" class="filter filter-option">Store
                systemer</button>
                <button onclick="fillProductsListButton(event, 1), hideFilters()" class="filter filter-option">Andre
                systemer</button>
            </ul>
        </div>
    )
}

export default Banner;
