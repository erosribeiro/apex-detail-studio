interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-surface border-t border-border ${className}`}>
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold text-text-primary mb-4">
              Apex Detail Studio
            </h3>
            <p className="text-text-secondary">
              Estética automotiva premium em Belo Horizonte. Seu veículo,
              nossa arte.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contato</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>Rua Exemplo, 123</li>
              <li>Belo Horizonte, MG</li>
              <li>(31) 99999-9999</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
             Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-text-secondary">
              <li>Seg - Sex: 08h - 18h</li>
              <li>Sáb: 08h - 14h</li>
              <li>Dom: Fechado</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-text-muted text-sm">
          © {new Date().getFullYear()} Apex Detail Studio. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}