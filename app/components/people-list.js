import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
    showPerson(person) {
        alert(`This person's name is ${person}!`);
    }
}