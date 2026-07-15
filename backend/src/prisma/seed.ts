async function main(): Promise<void> {
  console.log(
    'Backend Bilik Farm hors périmètre MVP : aucune donnée initiale créée.',
  );
}

main().catch((error) => {
  console.error('Seed de quarantaine interrompu.', error);
  process.exitCode = 1;
});
