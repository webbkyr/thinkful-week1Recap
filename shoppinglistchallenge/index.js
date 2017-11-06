/*global $
*/

'use strict';

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];
  
function generateItemElement(item, itemIndex, template) {
  return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
        <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
              <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
              <span class="button-label">delete</span>
          </button>
          <form id='js-rename-item'>
            <label for="rename-item-entry">Rename item</label>
            <input type='text' name='rename-item-entry' class='js-rename-item-entry' placeholder='Title change'>
            <button type='submit'>Rename item</button>
          </form>
        </div>
      </li>`;
}

   
function generateShoppingItemsString(shoppingList) { 
  //take each item and its index and return the item element; join into one big string// 
  const items = shoppingList.map((item, index) => generateItemElement(item, index));
  return items.join('');
}
  
  
function renderShoppingList() {
  // render the shopping list in the DOM
  const shoppingListItemsString = generateShoppingItemsString(STORE);
  // insert that HTML into the DOM
  $('.js-shopping-list').html(shoppingListItemsString);
}
  
function addItemToShoppingList(itemName) {
  console.log(`Adding "${itemName}" to shopping list`);
  STORE.push({name: itemName, checked: false});
}
  
function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
}
  
function toggleCheckedForListItem(itemIndex) {
  console.log('Toggling checked property for item at index ' + itemIndex);
  STORE[itemIndex].checked = !STORE[itemIndex].checked;
}
  
function getItemIndexFromElement(item) {
  const itemIndexString = $(item)
    .closest('.js-item-index-element')
    .attr('data-item-index');
  return parseInt(itemIndexString, 10);
}
  
function handleItemCheckClicked() {
  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
    console.log('`handleItemCheckClicked` ran');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    toggleCheckedForListItem(itemIndex);
    renderShoppingList();
  });
}

function deleteListItem(itemIndex) {
  console.log('Item at index ' + itemIndex + ' was removed');
  STORE.splice(itemIndex, 1);
}
  
  
function handleDeleteItemClicked() {
  // Listen for when users want to delete an item and 
  // delete it
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    deleteListItem(itemIndex);
    renderShoppingList();
  });
}

function renameItem(itemIndex, newItemTitle) {
  console.log( `Item at at index ${itemIndex} was changed.`);
  STORE[itemIndex]['name'] = newItemTitle;
}

function handleItemTitleChanged() {
  //listen for when users change the title//
  $('.js-shopping-list').on('submit', '#js-rename-item', event => {
    event.preventDefault();
    const newItemTitle = $('.js-rename-item-entry').val();
    $('.js-rename-item-entry').val('');
    const itemIndex = getItemIndexFromElement(event.currentTarget);
    renameItem(itemIndex, newItemTitle);  
    renderShoppingList();
  });
}



function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleItemTitleChanged();
}
  
$(handleShoppingList);
  