import React from "react";
import { IoMdStarOutline } from "react-icons/io";

const ITEM = [
  {
    review:
      "TaskFlow has completely transformed how our engineering team operates. The interface is clean, fast, and stays out of your way.",
    name: "Alex M.",
    role: "CTO at TechStart",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI4i_RURV-hXM24zSV01f_kopV4UFcbz6L-gUMUEYgdyKAmLRa7g-wawRWkARU4gdo--rMiDkfqqa6vLejmxg-OlOjGQdtI1sGOWyYw-kNWDz8Xdk0qxSIgY3zNep7RNf0jGolZ6mMCHwZ7MRDiqGYAnD8zGxTCtU2anUFbfN9nGXreRex3XqdaYDmiv1qFJYMQPnFg3Dag3U-jyAUKmIHiTHBaqCewzcKxhllqloK3fHB67WVu_ahlj1hb91Sv0laqfiSue4W6hrZ",
  },
  {
    review:
      "Finally, a project management tool that doesn't feel like a chore. The dark mode is beautiful and easy on the eyes.",
    name: "Sarah L.",
    role: "Product Manager",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlXUY1_pPidwQFJ-Yn_0TAyvLnm8SJAKUnyF6hnYeLMNZsHBIxmTKe0-r_x_6lModxF07GXFjbZX_FroS7_A5fuQkCfmW4BPEw078cbq2_69EH6BhRvsXqYJw8w6Ny5NoUt9-oJf-gXJfgC7DMbUcHwE2JEW_UhX9-IdZ97CoAmAiAHGY0fSJuhyayksKG-tKzwSq8dLiE0DONt-OPGHqab5WUXl5T6ZuftUvuSZ8mnrGcQWl4GAVOGmvaRbbe33UUGQtZ-zexran6",
  },
  {
    review:
      "The analytics features are a game changer. We can actually see where we are blocked and fix it instantly.",
    name: "David K.",
    role: "Lead Dev",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMlKt7mIdtFWx-unQkK-hDQs3j2RY9Om8zfrcAi26Fmrn0i2jWcVrIKhrquZyLZQ57q-B3zOJFa_mcEI4eaJq4qDi4EURgAmiz6TZHWP9tHtBCQlPK6HUtP_sh_zGCqhjRKmerNcRS7hRxM0AZ7Cg3-cotiWQ4P6wJChwFOoW_3EA2bXQiUCY9AgY0S2k1vweKC2nl7g21-zym7LQj3_AFqgV1NZ8Vkv9x35xyKkQb-uBv3lGN2bhBHrRAu4P6wFgSyMicNvMTrK3P",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-[#0f1b14] border-t border-[#1b3224]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">
          Loved by developers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review 1 */}

          {ITEM.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#122118] border border-[#254632]"
            >
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <IoMdStarOutline key={i} size={20} className="text-[#36E27B]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-6">
                {item.review}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="size-10 rounded-full bg-gray-600 bg-cover bg-center"
                  data-alt="Portrait of Alex M."
                  style={{
                    backgroundImage:
                      `url("${item.avatar}")`,
                  }}
                ></div>
                <div>
                  <div className="text-white font-bold text-sm">{item.name}</div>
                  <div className="text-[#95c6a9] text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
