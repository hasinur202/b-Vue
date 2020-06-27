Vue.component('btn',{
		template:
		`
			<a class="button is-dark" @click='launch'>Launch Modal</a>
		`,
		methods:{
			launch(){
				this.$emit('button_clicked');
			}
		}
	


	});

Vue.component('modal',{
	template:
	`
		<div class="modal" :class='active'>
		  <div class="modal-background"></div>
		  <div class="modal-card">

		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      		<slot></slot>
		      </p>
		      <button @click='closeModal' class="delete" aria-label="close"></button>
		    </header>

		    <section class="modal-card-body">
		      	<slot name='section'></slot>

		    </section>

		    <footer class="modal-card-foot">
		      <button class="button is-success">Save changes</button>
		      <button @click='closeModal' class="button">Cancel</button>
		    </footer>

		  </div>
		</div>
	`,
	methods:{
		closeModal(){
			this.$emit('close_modal');
		}
	},

	props:[
		'active'
	]
});

new Vue({
	el:'#app',
	data:{
		activateModal:''
	},
	
	methods:{
		launchModal(){
			this.activateModal='is-active';
		},

		close(){
			this.activateModal='';
		}
	}


});