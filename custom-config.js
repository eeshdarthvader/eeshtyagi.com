module.exports = {

    
    passes: [{
      recordTrace: true,
      pauseAfterLoadMs: 5000,
      useThrottling: true,
      gatherers: [],
    }],
  
    audits: [
      'first-meaningful-paint',
      'speed-index-metric',
      'first-interactive',
      'consistently-interactive',
    ]
  };