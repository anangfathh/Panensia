<template>
  <header>
    <AdminNavComp />
  </header>
  <main>
    <div>
      <h2>Edit Reseller</h2>

      <!-- Form for Editing Reseller -->
      <form @submit.prevent="updateReseller">
        <label for="name">Name:</label>
        <input v-model="resellerData.name" type="text" id="name" required>

        <label for="phone">Phone:</label>
        <input v-model="resellerData.phone" type="text" id="phone" required>

        <label for="email">Email:</label>
        <input v-model="resellerData.email" type="email" id="email" required>

        <label for="brand">Brand:</label>
        <input v-model="resellerData.brand" type="text" id="brand" required>

        <label for="address">Address:</label>
        <input v-model="resellerData.address" type="text" id="address" required>

        <label for="logo">Logo:</label>
        <div class="logo-container">
          <input type="file" ref="logo" @change="handleLogoChange">
          <img v-if="resellerData.logo_path" :src="resellerData.logo_path" alt="Reseller Logo" class="logo-image">
            <div v-else-if="uploadingLogo" class="uploading-status">Uploading...</div>
        </div>

        <label for="link_social">Social Media Link:</label>
        <input v-model="resellerData.link_social" type="text" id="link_social">

        <label for="is_active">Is Active:</label>
        <select v-model="resellerData.is_active" id="is_active">
          <option :value="true">Yes</option>
          <option :value="false">No</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  </main>
  <footer>
    <AdminFooterComp />
  </footer>
</template>

<script>
import AdminNavComp from '../../components/AdminNavComp.vue'
import AdminFooterComp from '../../components/AdminFooterComp.vue'

export default {
  components: {
    AdminNavComp,
    AdminFooterComp
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      resellerData: {
        name: '',
        phone: '',
        email: '',
        brand: '',
        address: '',
        logo_path: '',
        link_social: '',
        is_active: false,
      },
      uploadingLogo: false,
    };
  },
  mounted() {
    // Fetch Reseller data from API
    this.fetchResellerData();
  },
  methods: {
    async fetchResellerData() {
      try {
        const response = await fetch(`/api/resellers/${this.id}`);
        const data = await response.json();
        this.resellerData = data;
      } catch (error) {
        console.error('Error fetching reseller data:', error);
      }
    },
    triggerFileInput() {
      this.$refs.logoInput.click();
    },
    handleLogoChange(event) {
      const file = event.target.files[0];
      this.uploadLogo(file);
    },
    async uploadLogo(file) {
      try {
        this.uploadingLogo = true;

        const formData = new FormData();
        formData.append('logo', file);

        const response = await fetch(`/api/reseller/${this.id}/upload-logo`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          this.resellerData.logo_path = data.logo_path;
        } else {
          console.error('Failed to upload logo:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading logo:', error);
      } finally {
        this.uploadingLogo = false;
      }
    },
    async updateReseller() {
      try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const response = await fetch(`/api/reseller/edit/${this.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken,
          },
          body: JSON.stringify(this.resellerData),
        });

        if (response.ok) {
          // Redirect to the Reseller list after successful update
          this.$router.push({ name: 'admin.resellers' });
          console.log('Reseller updated successfully');
        } else {
          console.error('Failed to update reseller:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating reseller:', error);
      }
    },
  },
};
</script>
