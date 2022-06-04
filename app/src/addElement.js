<script>
    const sectionTemplate = '<section class="grid-card">' +
        '<div class="grid-card__actions grid-card__actions_type-section">' +
            '<button type="button" role="button" class="action">' +
                '<img src="./assets/svg/add_circle.svg" alt="Add topic button" />' +
                '</button>' +
            '<button type="button" role="button" class="action">' +
                '<img src="./assets/svg/delete.svg" alt="Remove topic button" />' +
                '</button>' +
            '<button type="button" role="button" class="action">' +
                '<img src="./assets/svg/edit.svg" alt="Edit topic button" />' +
                '</button>' +
            '</div>' +
        '<h2 id="section-name"></h2>' +
        '<div id="element-wrapper" class="grid-card__element-wrapper"></div>' +
        '</section>'
    const elementTemplate = '<div class="grid-card__element">' +
                        '<button id="element-tile" type="button" role="button" class="grid-card__element-tile"></button>' +
                        '<div class="grid-card__actions grid-card__actions_type-element">' +
                            '<button type="button" role="button" class="action">' +
                                '<img src="./assets/svg/add_circle.svg" alt="Add sourse button"/>' +
                            '</button>' +
                            '<button type="button" role="button" class="action">' +
                                '<img src="./assets/svg/delete.svg" alt="Remove source button"/>' +
                            '</button>' +
                            '<button type="button" role="button" class="action">' +
                                '<img src="./assets/svg/edit.svg" alt="Edit source button"/>' +
                            '</button>' +
                        '</div>' +
                    '</div>'
</script>