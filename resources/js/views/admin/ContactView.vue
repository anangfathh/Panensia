<script>
import AdminNavComp from '../../components/AdminNavComp.vue'
import AdminFooterComp from '../../components/AdminFooterComp.vue'

export default {
  components: {
    AdminNavComp,
    AdminFooterComp
  },
  data() {
    return {
      contacts: [],
    };
  },
  mounted() {
    // Fetch Contacts from API
    this.fetchContacts();
  },
  methods: {
    async fetchContacts() {
      try {
        const response = await fetch('/api/contacts');
        const data = await response.json();
        this.contacts = data;
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    },
  },
};
</script>
<template>
  <header>
    <AdminNavComp />
  </header>
  <main>
    <div>
      <h2>Contacts</h2>

      <!-- Display Contacts in a table -->
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id">
            <td>{{ contact.type }}</td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.message }}</td>
            <td>
              <router-link :to="{ name: 'admin.contacts.detail', params: { id: contact.id }}">View Detail</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <footer>
    <AdminFooterComp />
  </footer>
</template>
