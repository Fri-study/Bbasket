import React from "react";

function LoginFooter() {
  return (
    <div>
      <div class="p-10 pb-3 rounded-b-lg text-blue-500 bg-white flex items-center justify-between">
        <a
          href="#"
          class="inline-block hover:text-blue-900 align-baseline  text-sm"
        >
          이용약관
        </a>
        <a href="#" class="inline-block hover:text-blue-900  text-sm">
          개인정보 처리방침
        </a>
      </div>
    </div>
  );
}

export default LoginFooter;
