import React from 'react';
import { BRANDS, MODELS } from '../utils/constants';

function BrandModelSelect({ selectedBrand, selectedModel, onBrandChange, onModelChange }) {
  const models = MODELS[selectedBrand] || [];

  return (
    <div className="brand-model-selector">
      <div className="section-header">
        <h3>🏢 Brand / Model</h3>
      </div>

      <div className="form-group">
        <label>Marca:</label>
        <select
          value={selectedBrand}
          onChange={(e) => {
            onBrandChange(e.target.value);
            onModelChange('');
          }}
          className="select-input"
        >
          {BRANDS.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Modelo:</label>
        <select
          value={selectedModel}
          onChange={(e) => onModelChange(e.target.value)}
          className="select-input"
        >
          <option value="">Selecione um modelo...</option>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default BrandModelSelect;
