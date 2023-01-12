import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/departmentIntroduction/educationalGoal');
  }, []);
  return <h1>loading..</h1>;
}
