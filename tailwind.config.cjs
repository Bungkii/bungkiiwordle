const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // --- โทนสีเขียวที่คุณต้องการ ---
        'correct': '#10B981',   // 🟢 เขียวสว่าง (Emerald): สำหรับตัวอักษรที่ทายถูกและถูกตำแหน่ง
        'present': '#A3E635',   // 🧪 เขียวมะนาว (Lime): สำหรับตัวอักษรที่ทายถูกแต่ผิดตำแหน่ง
        'absent': '#1F2937',    // 🌲 เขียวเข้มจัด (Dark Slate): สำหรับตัวอักษรที่ไม่มีในคำตอบ
        // ------------------------------
        'tile-text': '#FFFFFF', // สีตัวอักษรบนช่อง (ขาว)
        'key-default': '#E5E7EB', // สีปุ่มคีย์บอร์ดปกติ
        'header-bg': '#065F46', // สีเขียวเข้มสำหรับส่วนหัวของเกม
      }
    },
    container: {
      center: true,
      padding: {
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },

  plugins: [],
}

module.exports = config
