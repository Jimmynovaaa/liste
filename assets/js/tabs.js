function changeTab(evt, category) {
    var tabContent = document.getElementsByClassName("tabContent");
    var tabLinks = document.getElementsByClassName("tabLinks");
    var categoryTabContent = document.getElementById(category);
    var categoryTabIsSorted =
        categoryTabContent.querySelector("th.sorttable_sorted") !== null
        || categoryTabContent.querySelector("th.sorttable_sorted_reverse") !== null
    ;

    [...tabContent].forEach(element => { element.style.display = "none"; });
    [...tabLinks].forEach(element => { element.className = element.className.replace(" active", ""); })
    categoryTabContent.style.display = "block";
    evt.currentTarget.className += " active";
    window.scrollTo(0, 0);

    /**
     * Makes items category column sorted by default.
     * @see https://www.kryogenix.org/code/browser/sorttable/#externalcall
     */
    if (category === 'items' && !categoryTabIsSorted) {
        sorttable.innerSortFunction.apply(
            categoryTabContent.querySelector("th.category"),
            [],
        );
    }
}
