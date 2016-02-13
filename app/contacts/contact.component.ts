import {Component} from 'angular2/core';

@Component({
	 selector : 'contact',
	 template :
	`
    <input [(ngModel)]="contact.firstName" type="text">
	<div>
        Phone Number: {{contact.phone}}<br>
		E-mail: {{contact.email}}<br>
	</div>
	
	`,
	 inputs: ['contact']
})

export class ContactComponent {
	public contact = {};
}